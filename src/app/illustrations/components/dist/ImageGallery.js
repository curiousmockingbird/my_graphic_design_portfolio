'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Modal_1 = require("@mui/material/Modal");
var Box_1 = require("@mui/material/Box");
var image_1 = require("next/image");
var modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4
};
function ImageGallery(_a) {
    var images = _a.images;
    var _b = react_1.useState(false), open = _b[0], setOpen = _b[1];
    var _c = react_1.useState(Object), selectedImage = _c[0], setSelectedImage = _c[1];
    var handleOpen = function (resource) {
        setSelectedImage(resource);
        setOpen(true);
    };
    var handleClose = function () { return setOpen(false); };
    console.log('Hola', selectedImage.height);
    return (
    //   <div className='flex justify-center pb-3'>
    //     <h2>Illustrations & Posters</h2>
    //   </div>
    react_1["default"].createElement("div", { className: 'columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 z-0' },
        images.map(function (resource) {
            var publicIdParts = resource.public_id.split('/');
            var filename = publicIdParts[publicIdParts.length - 1];
            return (react_1["default"].createElement("div", { key: resource.secure_url, className: 'cursor bg-orange rounded-3xl hover:rounded-none transition-all duration-700' },
                react_1["default"].createElement("button", { key: resource.secure_url, onClick: function () { return handleOpen(resource); } },
                    react_1["default"].createElement(image_1["default"], { className: 'grayscale custom-div-illustrations hover:grayscale-0', width: resource.width, height: resource.height, src: resource.secure_url, sizes: '(max-width: 768px) 35vw, (max-width: 1024px) 50vw, 100vw', alt: filename, placeholder: 'blur', blurDataURL: resource.blurDataUrl }))));
        }),
        react_1["default"].createElement(Modal_1["default"], { open: open, onClose: handleClose, "aria-labelledby": "modal-modal-title", "aria-describedby": "modal-modal-description" },
            react_1["default"].createElement(Box_1["default"], { sx: modalStyle }, selectedImage && (react_1["default"].createElement(image_1["default"], { src: selectedImage.secure_url, alt: selectedImage.alt, width: selectedImage.width, height: selectedImage.height, placeholder: 'blur', blurDataURL: selectedImage.blurDataUrl }))))));
}
exports["default"] = ImageGallery;
