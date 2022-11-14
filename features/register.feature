Feature: To test the register functionality in "https://losestudiantes.com/"
    As a user I want to register on the student website to enter the university chat

  Scenario Outline: Register failed with wrong inputs
    Given I go to losestudiantes home screen
    And I open the login screen
    And I open the registration screen
    And I fill with <name>, <lastname>, <email>, <password> and <password2>
    And I try to register
    Then I expect to see <error> in the register
    Then I wait

    Examples: 
      | name   | lastname | email            | password  | password2  | error                                   |
      | prueba | registro | prueba@email.com |      1234 |       1234 | "La contraseña debe tener 8 caracteres" |
      | prueba | registro | misogmail.com    | pruba1234 | pruba1234  | "Ingresa un correo electrónico válido"  |
      | prueba | registro | misogmail.com    | pruba1234 | pruba12345 | "Las contraseñas no coinciden"          |

  Scenario: Register successful with random values
    Given I go to losestudiantes home screen
    And I open the login screen
    And I open the registration screen
    And I fill with random values to name, lastname, email, password
    And I try to register
    Then I expect to see successful registration message ¡Inscripción exitosa!
    Then I wait
