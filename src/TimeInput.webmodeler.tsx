import { Component, ReactNode, createElement } from "react";
import { TimeInputPreviewProps } from "../typings/TimeInputProps";
import { TimeSelector } from "./components/TimeSelector";

declare function require(name: string): string;

export class preview extends Component<TimeInputPreviewProps> {
    render(): ReactNode {
        const { dataInput, labelShow, labelCaption, notationType, placeHolderText } = this.props;
        const placeHolder = typeof dataInput !== "undefined" ? dataInput : placeHolderText;

        return (
            <TimeSelector
                label={labelShow && labelCaption ? labelCaption : null}
                use12Hours={notationType === "twelvehours"}
                showHour={this.props.showHourEnable}
                showMinute={this.props.showMinuteEnable}
                showSecond={this.props.showSecondsEnable}
                hourStep={this.props.stepSizeHour}
                minuteStep={this.props.stepSizeMinute}
                secondStep={this.props.stepSizeSecond}
                placeholder={placeHolder}
            />
        );
    }
}

export function getPreviewCss(): string {
    return require("./ui/TimeInput.scss");
}
