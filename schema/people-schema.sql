CREATE TABLE IF NOT EXISTS people (
                                      id INT AUTO_INCREMENT PRIMARY KEY,
                                      name VARCHAR(255) NOT NULL UNIQUE
    );

INSERT INTO people(name) VALUES
                             ('Raphael'),
                             ('Lucas'),
                             ('Mariana'),
                             ('Fernando'),
                             ('Beatriz'),
                             ('André')
    ON DUPLICATE KEY UPDATE name = VALUES(name);