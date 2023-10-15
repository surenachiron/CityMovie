import Image from "next/image";

const SimpleLoading = ({ width, height }) => {
    return (
        <Image
            src={"/images/loading-spinner.svg"}
            alt="loading gif"
            width={width}
            height={height}
            priority="true"
        />
    );
}

export default SimpleLoading;