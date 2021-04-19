describe("Teste unitario App", () => {
    it('Verifica se a String contém o trecho', () =>{
        
        expect("Selecione o jogo desejado!").toMatch(/o jogo/);
        
    }),

    it("Verifica Igualdade e retorna uma String", () => {
        var teste = 6;
        expect(teste).toEqual(6);
        
    })
})