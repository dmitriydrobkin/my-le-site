INSERT OR IGNORE INTO `categories` (`id`, `slug`, `name_ru`, `name_uk`, `sort_order`, `created_at`) VALUES 
('cat-landing', 'landings', 'Лендинги', 'Лендінги', 1, strftime('%s','now') * 1000),
('cat-tg-bots', 'tg-bots', 'Тг боты', 'Тг боти', 2, strftime('%s','now') * 1000),
('cat-multipage', 'multipage', 'Многостраничные сайты', 'Багатосторінкові сайти', 3, strftime('%s','now') * 1000),
('cat-ecommerce', 'ecommerce', 'E-commerce', 'E-commerce', 4, strftime('%s','now') * 1000),
('cat-sites', 'sites', 'Сайты', 'Сайти', 5, strftime('%s','now') * 1000),
('cat-webapp', 'webapps', 'WEB-приложения', 'WEB-додатки', 6, strftime('%s','now') * 1000);

UPDATE `projects` SET `category_id` = 'cat-sites' WHERE `category` = 'САЙТЫ';
UPDATE `projects` SET `category_id` = 'cat-ecommerce' WHERE `category` = 'E-COMMERCE';
UPDATE `projects` SET `category_id` = 'cat-tg-bots' WHERE `category` = 'TELEGRAM-БОТЫ';
UPDATE `projects` SET `category_id` = 'cat-webapp' WHERE `category` = 'WEB-ПРИЛОЖЕНИЯ';
