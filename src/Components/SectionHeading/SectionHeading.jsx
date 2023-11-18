/* eslint-disable react/prop-types */
const SectionHeading = ({ subHeading, heading }) => {
    return (
        <div className="w-1/4 mx-auto text-center my-3">
            <p className="text-yellow-500">
                <i>---{subHeading}---</i>
            </p>
            <h3 className="text-3xl font-semibold border-y-4 ">{heading}</h3>
        </div>
    );
};

export default SectionHeading;
