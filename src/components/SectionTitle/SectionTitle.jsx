const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mx-auto text-center my-6 md:w-4/12">
            <p className="text-[#E7BF62] lilita mb-2">--- {subHeading} ---</p>
            <h3 className="text-3xl uppercase border-y-4 py-4 monospace">{heading}</h3>
        </div>
    );
};

export default SectionTitle;