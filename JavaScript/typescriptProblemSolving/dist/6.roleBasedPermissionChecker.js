"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const canEdit = (role) => {
    if (role === "admin" || role === "editor")
        return true;
    return false;
};
console.log(canEdit("admin"));
console.log(canEdit("editor"));
console.log(canEdit("viewer"));
// console.log(canEdit('guest'));
//# sourceMappingURL=6.roleBasedPermissionChecker.js.map