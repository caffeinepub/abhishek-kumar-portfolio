import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface SocialLinks {
    dev: string;
    linkedin: string;
    twitter: string;
    email: string;
    stackOverflow: string;
    internetComputer: string;
    github: string;
}
export interface PortfolioData {
    bio: string;
    projects: Array<Project>;
    socialLinks: SocialLinks;
    name: string;
    skills: Array<string>;
}
export interface Project {
    link: string;
    name: string;
    description: string;
    technologies: Array<string>;
}
export interface backendInterface {
    getPortfolioData(): Promise<PortfolioData>;
}
