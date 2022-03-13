describe("test job application flow", () => {
    
    //prevents Cypress from failing the test
    context("avoide an uncaught error", () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
            
        })

        it("visit website", () => {
            cy.visit("https://appunite.com/")
            cy.get(".LinksContainer_wrapper__1NrQw").contains("Career").click({ force: true })
            cy.contains(".CareerOffers_offerTitle__3-TYj", "QA Engineer").click()
            cy.get(".OfferSidebar_button__x6yhH").contains("Apply now").invoke('removeAttr', 'target').click()
        
        })

        context("application form", () => {
            it("personal information", () => {
                cy.get(".col-md-3").contains("Personal information")
                cy.get("input[id='candidate_name']").type("Paweł Test")
                cy.get("input[id='candidate_email']").type("pawel_test@op.pl")
                cy.get("input[id='candidate_phone']").type("123456789")

            })

            it("CV/Resume", () => {
                const filepath = 'cv/pawel_test_CV.pdf'
                cy.get('input[type="file"]').attachFile(filepath)
                cy.get('.file-preview').contains('pawel_test_CV.pdf')

            })

            it("questions", () => {
                cy.get("input[id='candidate_open_question_answers_attributes_0_content']").type("May")
                cy.get("input[id='candidate_open_question_answers_attributes_1_content_remotely']").click()
                cy.get("input[id='candidate_open_question_answers_attributes_2_content_yes']").click()
                cy.get("input[id='candidate_open_question_answers_attributes_3_content_yes']").click()

            })

            // it("submit form", () => {
            //     cy.get("input[type='submit']").click()
            // })
        })
    })
})
