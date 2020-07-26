describe('logistics-feature-planner: LogisticsFeaturePlanner component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=logisticsfeatureplanner--primary'));

    it('should render the component', () => {
      cy.get('div').should('contain', 'Nomination Management');
      cy.get('StyledTitle').should('contain', 'Nomination Management')
    });
});
