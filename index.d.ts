export function string(p: any): boolean;
export function func(p: any): boolean;
export function num(p: any): boolean;
export function bool(p: any): boolean;
export function obj(schema: Record<string, any>): (p: any) => boolean;