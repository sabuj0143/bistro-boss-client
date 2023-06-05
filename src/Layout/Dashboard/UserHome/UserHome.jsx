import useAuth from "../../../Hooks/useAuth";

const UserHome = () => {
    const {user} = useAuth();
    return (
        <div className="w-full m-4">
            <h4 className="text-3xl">Welcome Black, {user.displayName}</h4>
        </div>
    );
};

export default UserHome;