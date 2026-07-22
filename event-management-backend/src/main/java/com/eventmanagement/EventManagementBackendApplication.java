package com.eventmanagement;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import javax.sql.DataSource;

@SpringBootApplication
public class EventManagementBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(EventManagementBackendApplication.class, args);
    }

    @Bean
    CommandLineRunner printDatabaseLocation(DataSource dataSource) {
        return args -> {
            System.out.println("========================================");
            System.out.println("Database URL: " +
                    dataSource.getConnection().getMetaData().getURL());
            System.out.println("========================================");
        };
    }
}