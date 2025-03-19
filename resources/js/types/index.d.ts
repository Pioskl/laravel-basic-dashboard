import type { Config } from 'ziggy-js';

export type AppPageProps = {
    auth: { user: User | null };
    ziggy: Config & { location: string };
};


export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    last_session: string | null;
    created_at: string;
    updated_at: string;
}
