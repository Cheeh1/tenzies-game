import React from "react"

const Die = (props) => {

    return (
        <>
            <main onClick={props.holdDice}>
                    <h2 className={props.isHeld ? "die-held" : "die-not-held"}>{props.value}</h2>
            </main>
        </>
    )
}
export default Die;