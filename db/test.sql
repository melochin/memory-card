insert into brochure (name, description, user_id, create_time)
  values ('test', 'test', 1, now());

insert into card (brochure_id, front, back)
  select id, 'test', 'test' from brochure limit 1;

commit;