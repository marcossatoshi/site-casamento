-- Create messages table
CREATE TABLE messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create rsvp table
CREATE TABLE rsvp (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT,
    attending BOOLEAN NOT NULL DEFAULT true,
    guests_count INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Add Row Level Security (RLS) policies
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE rsvp ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts and reads for messages
CREATE POLICY "Allow anonymous read access on messages" ON messages FOR SELECT USING (true);
CREATE POLICY "Allow anonymous insert access on messages" ON messages FOR INSERT WITH CHECK (true);

-- Allow anonymous inserts for rsvp (read access is restricted for privacy)
CREATE POLICY "Allow anonymous insert access on rsvp" ON rsvp FOR INSERT WITH CHECK (true);
