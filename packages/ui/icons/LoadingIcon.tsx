import React, { FC, SVGAttributes } from 'react'

const LoadingIcon: FC<SVGAttributes<SVGElement>> = ({ ...props }) => (
    <svg
        width="30"
        height="30"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        className="lds-rolling"
        {...props}
    >
        <circle
            cx="50"
            cy="50"
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
            r="32"
            strokeDasharray="150 52"
            transform="rotate(279.944 50 50)"
        >
            <animateTransform
                attributeName="transform"
                type="rotate"
                calcMode="linear"
                values="0 50 50;360 50 50"
                keyTimes="0;1"
                dur="1s"
                begin="0s"
                repeatCount="indefinite"
            />
        </circle>
    </svg>
)

export default LoadingIcon
