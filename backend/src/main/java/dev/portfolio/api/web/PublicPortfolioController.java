package dev.portfolio.api.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/public")
public class PublicPortfolioController {

    @GetMapping("/profile")
    public Map<String, Object> profile() {
        return Map.of(
            "name", "YOUR NAME",
            "title", "Software Engineer",
            "summary", "Enterprise full-stack engineer specializing in Java, Spring Boot, Angular and production data systems.",
            "location", "YOUR LOCATION",
            "experienceYears", 2
        );
    }

    @GetMapping("/projects")
    public List<Map<String, Object>> projects() {
        return List.of(
            Map.of(
                "name", "Enterprise Operations Platform",
                "description", "Secure full-stack business application.",
                "technologies", List.of("Java", "Spring Boot", "Angular", "PrimeNG", "PostgreSQL")
            ),
            Map.of(
                "name", "Secure Data Management Suite",
                "description", "Role-aware production data application.",
                "technologies", List.of("Spring Security", "JWT", "Angular", "MySQL")
            )
        );
    }
}
