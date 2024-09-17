import { Col, Layout } from "antd"
import React from "react"
import JokeContainer from "./features/jokeGenerator/JokeComponent"

const App = () => {
    return (
        <Layout
            style={{
                background: "linear-gradient(90deg,#f6c4ed, #e1dae6)",
                minHeight: "100vh"
            }}
        >
            <Col
                xs={{ span: 20, offset: 2 }}
                sm={{ span: 10, offset: 7 }}
                xl={{ span: 6, offset: 9 }}
                style={{
                    width: "100%",
                    marginBlock: 120
                }}
            >
                <JokeContainer />
            </Col>
        </Layout>
    )
}

export default App
