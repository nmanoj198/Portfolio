-- Optional reference schema for production migration tooling.
-- Prefer Flyway or Liquibase before production deployment.

create table if not exists contact_message (
  id bigserial primary key,
  name varchar(160) not null,
  email varchar(320) not null,
  message text not null,
  created_at timestamptz not null default now()
);
