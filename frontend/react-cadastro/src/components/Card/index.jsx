import React from "react"

export default function Card({ title, children }) {
    return (
        <div className="bg-amber-500">
            <div>
                <h2>{ title }</h2>
            </div>
            <div>
                { children }
            </div>
        </div>
    )
}