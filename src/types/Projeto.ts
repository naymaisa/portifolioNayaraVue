export interface Projeto {
    id: number;
    titulo: string;
    categoria: 'Cursos' | 'Freelance' | 'Documentação' | 'Teste Técnico' | 'Testes de Software' | 'Projeto Pessoal';
    descricaoCurta: string;
    descricaoDetalhada: string;
    imagens: string[];
    codigoUrl?: string;
    siteUrl?: string;
}
