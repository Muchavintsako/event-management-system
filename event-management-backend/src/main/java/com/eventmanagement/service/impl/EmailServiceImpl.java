package com.eventmanagement.service.impl;

import com.eventmanagement.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements EmailService {

    @Autowired
    private JavaMailSender mailSender;

    @Override
    public void sendOtpEmail(String to, String otp) {

        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo(to);
        message.setSubject("Event Management OTP Verification");

        message.setText(
                "Welcome to Event Management.\n\n" +
                "Your OTP is: " + otp +
                "\n\nIt expires in 5 minutes.");

        mailSender.send(message);
    }
}