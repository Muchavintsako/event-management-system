package com.eventmanagement.service;

import com.eventmanagement.dto.request.LoginRequest;
import com.eventmanagement.dto.request.RegisterRequest;
import com.eventmanagement.dto.request.VerifyOtpRequest;
import com.eventmanagement.dto.response.ApiResponse;

public interface UserService {

    ApiResponse register(RegisterRequest request);

    ApiResponse verifyOtp(VerifyOtpRequest request);

    ApiResponse login(LoginRequest request);
}