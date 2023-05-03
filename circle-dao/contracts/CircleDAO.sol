// SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;
pragma abicoder v2;

contract CircleDAO {
    struct Circle {
        string did; // Digitial Identifier
        string data; // JSON object containing circle data
        string[] issuedCredentials;
        string[] receivedCredentials;
    }

    event CircleCreated(string did, address indexed creator, string data);
    event CircleUpdated(string did, address indexed updater, string data);
    event CredentialIssued(string did, address indexed issuer, string credential);
    event CredentialReceived(string did, address indexed receiver, string credential);

    mapping(string => Circle) public circles;

    function createCircle(
        string memory _data
    ) public returns (string memory) {
        string memory _did = generateDID();
        require(bytes(circles[_did].did).length == 0, "Circle with this DID already exists");
        circles[_did] = Circle(_did, _data, new string[](0), new string[](0));

        emit CircleCreated(_did, msg.sender, _data);
        return _did;
    }

    function updateCircle(string memory _did, string memory _newData) public {
        require(bytes(circles[_did].did).length != 0, "Circle with this DID does not exist");
        circles[_did].data = _newData;

        emit CircleUpdated(_did, msg.sender, _newData);
    }

    function getCircle(string memory _did) public view returns (Circle memory) {
        return circles[_did];
    }

    function issueCredential(string memory _did, string memory _credential) public {
        require(bytes(circles[_did].did).length != 0, "Circle with this DID does not exist");
        circles[_did].issuedCredentials.push(_credential);

        emit CredentialIssued(_did, msg.sender, _credential);
    }

    function receiveCredential(string memory _did, string memory _credential) public {
        require(bytes(circles[_did].did).length != 0, "Circle with this DID does not exist");
        circles[_did].receivedCredentials.push(_credential);

        emit CredentialReceived(_did, msg.sender, _credential);
    }

    function getIssuedCredentials(string memory _did) public view returns (string[] memory) {
        require(bytes(circles[_did].did).length != 0, "Circle with this DID does not exist");
        return circles[_did].issuedCredentials;
    }

    function getReceivedCredentials(string memory _did) public view returns (string[] memory) {
        require(bytes(circles[_did].did).length != 0, "Circle with this DID does not exist");
        return circles[_did].receivedCredentials;
    }

    function generateDID() internal view returns (string memory) {
        // generate DID based on creator address, current timestamp and hash (for more randomness)
        address _creator = msg.sender;
        uint256 _timestamp = block.timestamp;
        uint256 nonce = 0;
        bytes32 uniqueHash = keccak256(abi.encodePacked(_creator, _timestamp, nonce));
    
        while (bytes(circles[bytes32ToStr(uniqueHash)].did).length != 0) {
            nonce++;
            uniqueHash = keccak256(abi.encodePacked(_creator, _timestamp, nonce));
        }
        
        return string(abi.encodePacked("did:circle:", bytes32ToStr(uniqueHash)));
    }

    function bytes32ToStr(bytes32 _bytes32) internal pure returns (string memory) {
        uint8 i = 0;
        while (i < 32 && _bytes32[i] != 0) {
            i++;
        }
        bytes memory bytesArray = new bytes(i);
        for (i = 0; i < 32 && _bytes32[i] != 0; i++) {
            bytesArray[i] = _bytes32[i];
        }
        return string(bytesArray);
    }

    function uint2str(uint256 _i) internal pure returns (string memory) {
        if (_i == 0) {
            return "0";
        }
        uint256 j = _i;
        uint256 length;
        while (j != 0) {
            length++;
            j /= 10;
        }
        bytes memory bstr = new bytes(length);
        uint256 k = length - 1;
        while (_i != 0) {
            bstr[k--] = byte(uint8(48 + _i % 10));
            _i /= 10;
        }
        return string(bstr);
    }
}