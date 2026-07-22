package com.eventmanagement.controller;

import com.eventmanagement.dto.request.LoginRequest;
import com.eventmanagement.dto.request.RegisterRequest;
import com.eventmanagement.dto.request.VerifyOtpRequest;
import com.eventmanagement.dto.response.ApiResponse;
import com.eventmanagement.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private UserService userService;

    @GetMapping("/test")
    public String test() {
        return "Auth Controller Works";
    }

    @PostMapping("/register")
    public ApiResponse register(@Valid @RequestBody RegisterRequest request) {

        System.out.println("=========== REGISTER API HIT ===========");

        return userService.register(request);
    }

    @PostMapping("/verify-otp")
    public ApiResponse verifyOtp(@Valid @RequestBody VerifyOtpRequest request) {

        System.out.println("=========== VERIFY OTP API HIT ===========");

        return userService.verifyOtp(request);
    }

    @PostMapping("/login")
    public ApiResponse login(@Valid @RequestBody LoginRequest request) {

        System.out.println("=========== LOGIN API HIT ===========");

        return userService.login(request);
    }
}