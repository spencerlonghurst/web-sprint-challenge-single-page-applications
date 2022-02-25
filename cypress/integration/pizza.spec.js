describe('Pizza App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3003/');
  })

  it('sanity test!!', () => {
    expect(1 + 2).toBe.equal(3);
  })
})