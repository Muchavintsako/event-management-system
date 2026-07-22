package com.eventmanagement.service.impl;

import com.eventmanagement.dto.request.LoginRequest;
import com.eventmanagement.dto.request.RegisterRequest;
import com.eventmanagement.dto.request.VerifyOtpRequest;
import com.eventmanagement.dto.response.ApiResponse;
import com.eventmanagement.entity.User;
import com.eventmanagement.enums.Role;
import com.eventmanagement.otp.OtpGenerator;
import com.eventmanagement.repository.UserRepository;
import com.eventmanagement.security.JwtService;
import com.eventmanagement.service.EmailService;
import com.eventmanagement.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;


@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private EmailService emailService;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private OtpGenerator otpGenerator;

    @Override
    @Transactional
    public ApiResponse register(RegisterRequest request) {

        System.out.println("========== REGISTER SERVICE ==========");

        if (userRepository.existsByEmail(request.getEmail())) {
            return new ApiResponse(false, "Email already exists");
        }

        if (userRepository.existsByPhoneNumber(request.getPhoneNumber())) {
            return new ApiResponse(false, "Phone number already exists");
        }

        if (!request.getPassword().equals(request.getConfirmPassword())) {
            return new ApiResponse(false, "Passwords do not match");
        }

        String otp = otpGenerator.generateOtp();

        User user = User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .phoneNumber(request.getPhoneNumber())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .verified(false)
                .otp(otp)
                .otpExpiry(LocalDateTime.now().plusMinutes(5))
                .build();

        System.out.println("Saving user...");

        userRepository.save(user);
        userRepository.flush();

        System.out.println("User saved successfully!");
        System.out.println("Generated ID: " + user.getId());
        System.out.println("Generated OTP: " + otp);

        // Email temporarily disabled
        // emailService.sendOtpEmail(user.getEmail(), otp);

        return new ApiResponse(true, "Registration successful.");
    }

  @Override
@Transactional
public ApiResponse verifyOtp(VerifyOtpRequest request) {

    User user = userRepository.findByEmail(request.getEmail()).orElse(null);

    if (user == null) {
        return new ApiResponse(false, "User not found");
    }

    if (user.isVerified()) {
        return new ApiResponse(false, "Account already verified");
    }

    if (user.getOtp() == null) {
        return new ApiResponse(false, "No OTP found");
    }

    if (!user.getOtp().equals(request.getOtp())) {
        return new ApiResponse(false, "Invalid OTP");
    }

    if (user.getOtpExpiry().isBefore(LocalDateTime.now())) {
        return new ApiResponse(false, "OTP has expired");
    }

    user.setVerified(true);
    user.setOtp(null);
    user.setOtpExpiry(null);

    userRepository.save(user);

    return new ApiResponse(true, "Account verified successfully");
}

   @Override
public ApiResponse login(LoginRequest request) {

    User user = userRepository.findByEmail(request.getEmail())
            .orElse(null);

    if (user == null) {
        return new ApiResponse(false, "Invalid email or password");
    }

    if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
        return new ApiResponse(false, "Invalid email or password");
    }

    if (!user.isVerified()) {
        return new ApiResponse(false, "Please verify your account first");
    }

    String token = jwtService.generateToken(user.getEmail());

    return new ApiResponse(
            true,
            "Login successful",
            token
    );
}
}