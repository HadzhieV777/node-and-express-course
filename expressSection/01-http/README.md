### Port

In computer networking, a port is a number assigned to uniquely identify a connection endpoint and to direct data to a specific service. At the software level, within an operating system, a port is a logical construct that identifies a specific process or a type of network service. A port is identified for each transport protocol and address combination by a 16-bit unsigned number, known as the port number. The most common transport protocols that use port numbers are the Transmission Control Protocol (TCP) and the User Datagram Protocol (UDP).

A port number is always associated with an IP address of a host and the type of transport protocol used for communication. It completes the destination or origination network address of a message. Specific port numbers are reserved to identify specific services so that an arriving packet can be easily forwarded to a running application. For this purpose, port numbers lower than 1024 identify the historically most commonly used services and are called the well-known port numbers. Higher-numbered ports are available for general use by applications and are known as ephemeral ports.

Ports provide a multiplexing service for multiple services or multiple communication sessions at one network address. In the client–server model of application architecture, multiple simultaneous communication sessions may be initiated for the same service.
Common port numbers
Main article: List of TCP and UDP port numbers

IANA is responsible for the global coordination of the DNS root, IP addressing, and other protocol resources. This includes the registration of commonly used port numbers for well-known internet services.

The port numbers are divided into three ranges: the well-known ports, the registered ports, and the dynamic or private ports.

###### The well-known ports (also known as system ports)
are those numbered from 0 through 1023. The requirements for new assignments in this range are stricter than for other registrations.[2]
Notable well-known port numbers Number Assignment
20 File Transfer Protocol (FTP) Data Transfer
21 File Transfer Protocol (FTP) Command Control
22 Secure Shell (SSH) Secure Login
23 Telnet remote login service, unencrypted text messages
25 Simple Mail Transfer Protocol (SMTP) email delivery
53 Domain Name System (DNS) service
67, 68 Dynamic Host Configuration Protocol (DHCP)
80 Hypertext Transfer Protocol (HTTP) used in the World Wide Web
110 Post Office Protocol (POP3)
119 Network News Transfer Protocol (NNTP)
123 Network Time Protocol (NTP)
143 Internet Message Access Protocol (IMAP) Management of digital mail
161 Simple Network Management Protocol (SNMP)
194 Internet Relay Chat (IRC)
443 HTTP Secure (HTTPS) HTTP over TLS/SSL
546, 547 DHCPv6 IPv6 version of DHCP

The registered ports are those from 1024 through 49151. IANA maintains the official list of well-known and registered ranges.[3]

The dynamic or private ports are those from 49152 through 65535. One common use for this range is for ephemeral ports.
Network behavior

Transport-layer protocols, such as the Transmission Control Protocol (TCP) and the User Datagram Protocol (UDP), transfer data using protocol data units (PDUs). For TCP, the PDU is a segment, and for UDP it is a datagram. Both protocols use a header field for indicating the source and destination port numbers. The port numbers are encoded in the transport protocol packet header, and they can be readily interpreted not only by the sending and receiving hosts but also by other components of the networking infrastructure. In particular, firewalls are commonly configured to differentiate between packets based on their source or destination port numbers. Port forwarding is an example application of this.
Port scanning

The practice of attempting to connect to a range of ports in sequence on a single host is commonly known as port scanning. This is usually associated either with malicious cracking attempts or with network administrators looking for possible vulnerabilities to help prevent such attacks. Port connection attempts are frequently monitored and logged by hosts. The technique of port knocking uses a series of port connections (knocks) from a client computer to enable a server connection.
Examples

An example of the use of ports is the delivery of email. A server used for sending and receiving email generally needs two services. The first service is used to transport email to and from other servers. This is accomplished with the Simple Mail Transfer Protocol (SMTP). A standard SMTP service application listens on TCP port 25 for incoming requests. The second service is usually either the Post Office Protocol (POP) or the Internet Message Access Protocol (IMAP) which is used by email client applications on users' personal computers to fetch email messages from the server. The POP service listens on TCP port number 110. Both services may be running on the same host computer, in which case the port number distinguishes the service that was requested by a remote computer, be it a user's computer or another mail server.

While the listening port number of a server is well defined (IANA calls these the well-known ports), the client's port number is often chosen from the dynamic port range (see below). In some applications, the clients and the server each use specific port numbers assigned by the IANA. A good example of this is DHCP in which the client always uses UDP port 68 and the server always uses UDP port 67.
Use in URLs
Port numbers are sometimes seen in web or other uniform resource locators (URLs). By default, HTTP uses port 80 and HTTPS uses port 443, but a URL like http://www.example.com:8080/path/ specifies that the web browser connects instead to port 8080 of the HTTP server.

AEN ranges Port number range Assignment
0 through 63 Network-wide standard functions
64 through 127 Host-specific functions
128 through 239 Reserved for future use
240 through 255 Any experimental function

The Telnet service received the first official assignment of the value 1. In detail, the first set of assignments was:[7]
Port assignments in RFC 349 Port number Assignment
1 Telnet
3 File transfer
5 Remote job entry
7 Echo
9 Discard

<!-- REF => https://en.wikipedia.org/wiki/Port_(computer_networking) -->

The httpServerResponse.end() is an inbuilt application programming interface of class Server Response within http module which is used to send the signal to the server that all the header has been sent.

Syntax:

response.end(data, Encodingtype, Callbackfunction)

Parameters: This method takes three Parameters

    Data: Chunk of data that has to be sent
    Encoding Type: Type encoding for the data
    Callback: Callback function for further operation if necessary.

Return Value: This method returns this Server Response object.

REF => https://www.geeksforgeeks.org/node-js-http-serverresponse-end-method/


Common MIME types

REF => https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
