const ContactsMap = () => {
    return (
        <div className="contacts-map-container">
            <img
                src={`${process.env.PUBLIC_URL}/img/contacts-map.png`}
                alt="map of Kyiv"
                className="contacts-map"
            />
        </div>
    );
};

export default ContactsMap;
