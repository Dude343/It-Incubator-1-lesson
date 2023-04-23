import React from "react"

type AccordionPropsType = {
        titleValue: string
        collapsedValue: boolean
}

function Accordion(props: AccordionPropsType) {
        if (props.collapsedValue === false) {
                return (
                        <div>
                                <AccordionTitle title={props.titleValue} />
                                <AccordionBody />
                        </div>);
        } return (
                <div>
                        <AccordionTitle title={props.titleValue} />
                </div>
        );
}

type AccordionTitlePropsType = {
        title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
        return <h3>--   {props.title} --</h3>
}

function AccordionBody() {
        return (
                <div>
                        <ul>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                        </ul>
                </div>
        )
}

export default Accordion;