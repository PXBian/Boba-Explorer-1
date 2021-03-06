-- Usage: start your mysql client with option --local-infile on
-- Enter following command in your command line -> `mysql --local-infile=1 -u root -p`
-- Then run the script by typing `source PATH_TO_THIS_FOLDER/load_csv.sql`
-- example: `source /Users/breezelv/Desktop/CS411/Boba-Explorer/database/load_csv.sql`

SET GLOBAL local_infile=true;

USE `boba`;

-- load data for Store table
LOAD DATA LOCAL INFILE '/Users/milktealover/Documents/CS411/project/Store.csv'
INTO TABLE STORE
CHARACTER SET 'UTF8MB4'
FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

-- load data for Product table
-- Paste the absolute file path of your `Product` data source here
LOAD DATA LOCAL INFILE '/Users/milktealover/Documents/CS411/project/Product.csv'
INTO TABLE PRODUCT
CHARACTER SET 'UTF8MB4'
FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

-- source /Users/milktealover/Documents/CS411/project/Boba-Explorer/database/load_csv.sql