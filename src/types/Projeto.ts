export interface Projeto {
    id: number;
    titulo: string;
    categoria: 'Cursos' | 'Freelance' | 'Documentação' | 'Teste Técnico' | 'Projeto Pessoal';
    descricaoCurta: string;
    descricaoDetalhada: string;
    imagens: string[];
    codigoUrl?: string;
    siteUrl?: string;
}
