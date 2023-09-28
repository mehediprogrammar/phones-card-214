import PhonesCard from "./PhonesCard";

const Phones = ({phones}) => {
    return (
        <div className="py-10">
             <h1 className="text text-center">All categories phones</h1>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10"> 
                {
                    phones?.map(phone => <PhonesCard key={phone.id} phone={phone}></PhonesCard>)
                }
             </div>
        </div>
    );
};

export default Phones;