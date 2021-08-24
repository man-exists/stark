import { Button, Center, FormControl, FormErrorMessage, FormLabel, Img, Input, VStack } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import React from 'react'

function Home() {
    function validateName(value) {
        let error
        if (value.split(' ').length > 1) {
            error = "Only 1 Word Allowed"
        }
        return error
    }
    return (
        <VStack p="3">
            <Formik
                initialValues={{ name: "Hello" }}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        window.location = `https://europe-word-image-server.glutenmorgen.repl.co/${values.name}`
                    }, 1000)
                }}
            >
                {(props) => (
                    <Center>
                        <Form>
                            <Field name="name" validate={validateName}>
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                                        <FormLabel htmlFor="word">
                                            Please Input a word and we will generate a map of europe
                                            that shows the translation of your word in each country on the europe map
                                        </FormLabel>
                                        <Input {...field} id="word" placeholder="Word" />
                                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Button
                                w="100%"
                                mt={4}
                                colorScheme="teal"
                                isLoading={props.isSubmitting}
                                type="submit"
                            >
                                Submit
                            </Button>
                        </Form>
                    </Center>
                )}
            </Formik>
        </VStack>
    )
}

export default Home
