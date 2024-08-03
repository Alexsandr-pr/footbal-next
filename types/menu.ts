export interface MenuItem {
    name: string; 
    link: string;
}

interface Category {
    name: string; 
    items: MenuItem[];
}

export interface MenuResponse {
    categories: Category[];
    general: MenuItem[]; 
}

