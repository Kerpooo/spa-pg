import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, } from "@nextui-org/react";

export default function ModalUserDetail({ isOpen, onClose, email }) {
    return (
        <>
            <Modal
                size='md'
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{email}</ModalHeader>
                            <ModalBody>
                                {selectedItem && (
                                    <div>
                                        <p>Name: {selectedItem.name}</p>
                                        <p>Email: {selectedItem.email}</p>
                                    </div>
                                )}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
