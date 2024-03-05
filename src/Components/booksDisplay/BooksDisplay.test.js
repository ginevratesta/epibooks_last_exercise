async function fetchLibrary() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['Harry Potter', 'Il Signore degli Anelli', 'Cronache del ghiaccio e del fuoco']);
    }, 1000); 
  });
}

test('Verifica se fetchLibrary ottiene correttamente l\'elenco dei libri', async () => {
  const books = await fetchLibrary(); 

  expect(books).toHaveLength(3); 
  expect(books).toContain('Harry Potter'); 
  expect(books).toContain('Il Signore degli Anelli'); 
  expect(books).toContain('Cronache del ghiaccio e del fuoco'); 
});
