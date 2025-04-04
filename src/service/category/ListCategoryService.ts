class ListCategoryService {
    async execute() {
        const categorys = [
            {
                name: "Esportes"
            },
            {
                name: "Jogos"
            }
        ];
        return categorys;
    }
}

export { ListCategoryService }