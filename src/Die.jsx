import React from "react"

const Die = (props) => {

    return (
        <>
            <main>
                <div>
                    <h2 className="die">{props.value}</h2>
                </div>
            </main>
        </>
    )
}
export default Die;