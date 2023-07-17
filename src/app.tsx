import React, {useCallback, useState} from 'react';
import {ProductListContainer} from "./components/product/list/product-list.container";
import {CreateButton} from "./components/CreateButton";
import {Modal} from "./components/product/Creation/Modal";
import {ProductCreateForm} from "./components/product/ProductCreateForm";


function App() {
    const [modalOpened, setModalOpened] = useState(false)

    const openModal = useCallback( () => setModalOpened(true), [])
    const closeModal = useCallback(() => setModalOpened(false), []);

    return (

        <div>
            <ProductListContainer/>
            <CreateButton openModalHandler={openModal}/>
            {modalOpened && <Modal
                title='Create Product'
                closeModalHandler={closeModal}>
                <ProductCreateForm closeModalHandler={closeModal}/>
            </Modal>}

        </div>
    );
}

export default App;
