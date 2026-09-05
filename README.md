# Portfolio Platform — Enterprise Engineer Portfolio

A production-oriented portfolio built to position you as a Java/Spring Boot + Angular enterprise software engineer.

## Stack

- Frontend: Angular 22, TypeScript, PrimeNG, Tailwind CSS
- Backend: Java 21, Spring Boot 4.1.x, Spring Security, JWT, Spring Data JPA
- Database: PostgreSQL (MySQL can be substituted)
- Deployment: Docker, Nginx, HTTPS-ready
- UX: responsive, dark-first, glassmorphism, motion, architecture visualization

## Information architecture

1. Hero / professional positioning
2. Engineering metrics
3. About
4. Core expertise
5. Enterprise architecture
6. Selected projects
7. Professional experience
8. Certifications & achievements
9. Contact / networking
10. Private admin API for editing portfolio content

## Important

This repository contains a polished starter implementation and architecture. Replace placeholder identity/contact/project data before publishing.

## Run locally

### Frontend
```bash
cd frontend
npm install
npm start
```

### Backend
```bash
cd backend
./mvnw spring-boot:run
```

### PostgreSQL
```bash
docker compose up -d postgres
```

Frontend defaults to `http://localhost:4200`, backend to `http://localhost:8080`.

## Production

Build Angular and serve it behind Nginx. Run Spring Boot behind the reverse proxy. Set secrets using environment variables; never commit JWT secrets or database passwords.

## Suggested production enhancements

- Add Cloudflare/WAF and rate limiting.
- Store portfolio media in object storage/CDN.
- Add structured logging + OpenTelemetry.
- Add integration tests and Playwright E2E tests.
- Add a real admin UI protected by JWT + refresh tokens.
- Add CSP, HSTS, secure cookies, CORS allow-list and secret rotation.
