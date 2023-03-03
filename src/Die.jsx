import React from "react"

const Die = (props) => {

    return (
        <>
            <main>
                    <h2 className={props.isHeld ? "die-not-held" : "die-held"}>{props.value}</h2>
            </main>
        </>
    )
}
export default Die;