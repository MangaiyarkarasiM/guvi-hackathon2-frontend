import React from 'react';
import { useParams} from 'react-router-dom';
import Layout from '../components/Layout/Layout';

function ProfilePage(props) {
    let {id} = useParams();
    return (
        <div>
            <Layout/>
            ProfilePage of {id}
        </div>
    );
}

export default ProfilePage;