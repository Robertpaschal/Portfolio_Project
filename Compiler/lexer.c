#include "compiler.h"

/**
 * @brief Toknizes the input source code string
 * 
 * lexer - This function takes an input string representing the source code
 * and tokenizes it, identifying numbers, arithmetic operators,
 * and other tokens. It returns an array of tokens terminated by
 * a token of type TOKEN_END.
 * @input: The input source code string to tokenize
 * Return: An array of tokens.
 * @warning: The returned array of tokens must be freed by the caller.
*/

Token* lexer(const char *input) {
    int token_count = 0;
    const char *ptr = input;
    
    // Allocate memory for the array of tokens
    Token *tokens = malloc(sizeof(Token) * (strlen(input) + 1)); // +1 for null terminator
    if (tokens == NULL) {
        fprintf(stderr, "Memory allocation failed\n");
        exit(EXIT_FAILURE);
    }

    // Loop through the input string
    while (*ptr != '\0') {
        if (isspace(*ptr)) {
            ptr++;
            continue;
        }

        if (isdigit(*ptr)) {
            const char *start = ptr;
            while (isdigit(*ptr))
                ptr++;
        
            // Allocate memory for the token value
            tokens[token_count].value = malloc(ptr - start + 1);
            if (tokens[token_count].value == NULL) {
                fprintf(stderr, "Memory allocation failed\n");
                exit(EXIT_FAILURE);
            }

            // Copy the numeric characters to the token value
            strncpy(tokens[token_count].value, start, ptr - start);
            tokens[token_count].value[ptr - start] = '\0';

            // Set the token type to NUMBER
            tokens[token_count++].type = TOKEN_NUMBER;
            printf("Token: type=%d, value='%s'\n", tokens[token_count].type, tokens[token_count].value);
            continue;
        }

        // Handle arithmetic operators
        if (*ptr == '+') {
            tokens[token_count++].type = TOKEN_PLUS;
        }
        else if (*ptr == '-') {
            tokens[token_count++].type = TOKEN_MINUS;
        }
        else if (*ptr == '*') {
            tokens[token_count++].type = TOKEN_MULTIPLY;
        }
        else if (*ptr == '/') {
            tokens[token_count++].type = TOKEN_DIVIDE;
        } else {
            // Handle unknown tokens
            tokens[token_count++].type = TOKEN_UNKNOWN;
        }

        printf("Token: type=%d, value='%c'\n", tokens[token_count - 1].type, *ptr);
        ptr++;
    }

    // Set the end token
    tokens[token_count].type = TOKEN_END;
    tokens[token_count].value = NULL;

    return tokens;
}
