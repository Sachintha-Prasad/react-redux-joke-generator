import React, { useEffect } from "react"
import { useAppSelector } from "../../hooks/useAppSelector"
import { Button, Flex, Space, Spin, Typography } from "antd"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { fetchJoke } from "./jokeSlice"
import { SmileOutlined } from "@ant-design/icons"

const JokeComponent = () => {
    const { joke, isLoading, error } = useAppSelector(
        (satate) => satate.jokeReducer
    )
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchJoke())
    }, [dispatch])

    return (
        <Flex vertical gap={8} align="start">
            <Typography.Title>Random Joke Generator</Typography.Title>

            {isLoading ? (
                <Spin style={{ marginBottom: 12 }} />
            ) : error ? (
                <Typography.Text>{error}</Typography.Text>
            ) : (
                <Flex vertical>
                    <Typography.Text
                        style={{ textTransform: "uppercase" }}
                        strong
                    >
                        "{joke.type}"
                    </Typography.Text>
                    <Typography.Paragraph style={{ fontSize: 18 }}>
                        <span>{joke.setup}</span>-<span>{joke.punchline}</span>
                    </Typography.Paragraph>
                </Flex>
            )}

            <Button
                type="primary"
                disabled={isLoading}
                onClick={() => dispatch(fetchJoke())}
            >
                <SmileOutlined />
                Generate a joke
            </Button>
        </Flex>
    )
}

export default JokeComponent
