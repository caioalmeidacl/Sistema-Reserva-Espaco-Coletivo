CREATE TABLE user (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    phone TEXT,
    role TEXT NOT NULL DEFAULT 'regular'
);

CREATE TABLE space (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    type TEXT NOT NULL, 
    capacity INTEGER NOT NULL,
    description TEXT,
    manager_id INTEGER REFERENCES "user"(id) ON DELETE SET NULL
);

CREATE TABLE resource (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    available_quantity INTEGER NOT NULL
);

CREATE TABLE space_resource (
    space_id INTEGER NOT NULL REFERENCES space(id) ON DELETE CASCADE,
    resource_id INTEGER NOT NULL REFERENCES resource(id) ON DELETE CASCADE,
    quantity INTEGER NOT NULL,
    PRIMARY KEY (space_id, resource_id)
);

CREATE TABLE reservation (
    id SERIAL PRIMARY KEY,
    space_id INTEGER NOT NULL REFERENCES space(id),
    user_id INTEGER NOT NULL REFERENCES "user"(id),
    start_time TIMESTAMP NOT NULL,
    end_time TIMESTAMP NOT NULL,
    status TEXT DEFAULT 'pendente',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT check_data CHECK (end_time > start_time)
);

CREATE TABLE reservation_history (
    id SERIAL PRIMARY KEY,
    reservation_id INTEGER NOT NULL REFERENCES reservation(id),
    action TEXT NOT NULL, 
    action_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    action_user INTEGER REFERENCES "user"(id),
    details TEXT
);
