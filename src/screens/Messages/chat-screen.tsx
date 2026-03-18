import React, {
    useState,
    useRef,
    useEffect,
    MouseEvent,
    ChangeEvent,
  } from "react";
  import {
    Box,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
    TextField,
    InputAdornment,
  } from "@mui/material";
  
  import Header from "components/header/header";
  import SectionHeaderWithActions from "components/sectionheading/section-header-with-actions";
  import FooterMenuSet from "components/footermenu/footer-menu-set";
  
  import sendIcon from "assets/deliver.svg";
  import moreIcon from "assets/more-verticle.svg";
  import pdfIcon from "assets/pdf.svg";
  import paperclipIcon from "assets/paperclip.svg";
  import searchIcon from "assets/search.svg";
  
  import "./chat-screen.css";
  
  interface ChatMessage {
    date: string;
    type: "text" | "pdf" | "images";
    content?: string;
    name?: string;
    imageUrl?: string;
    count?: number;
    time: string;
    fromMe: boolean;
  }
  
  const initialMessages: ChatMessage[] = [
    {
      date: "19/05/2025",
      type: "text",
      content: "Please send report for Sagarmantha Co.",
      time: "09:21 am",
      fromMe: false,
    },
    {
      date: "19/05/2025",
      type: "pdf",
      name: "SAGARMANTHA CO. pdf",
      time: "10:06 am",
      fromMe: false,
    },
    {
      date: "19/05/2025",
      type: "images",
      imageUrl: "assets/sample-image.png",
      count: 7,
      time: "10:10 am",
      fromMe: false,
    },
    {
      date: "19/05/2025",
      type: "text",
      content: "Thank You",
      time: "10:28 am",
      fromMe: false,
    },
    {
      date: "TODAY",
      type: "text",
      content: "Please update approval status of CTPT-2342",
      time: "13:30 pm",
      fromMe: true,
    },
  ];
  
  export default function ChatScreen() {
    const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
    const [draft, setDraft] = useState("");
    const [moreAnchor, setMoreAnchor] = useState<null | HTMLElement>(null);
    const [attachAnchor, setAttachAnchor] = useState<null | HTMLElement>(
      null
    );
  
    const endRef = useRef<HTMLDivElement>(null);
  
    // auto-scroll when messages change
    useEffect(() => {
      endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);
  
    // grouping by date while preserving order
    const dateOrder = Array.from(
      new Set(messages.map((m) => m.date))
    );
    const grouped = messages.reduce<Record<string, ChatMessage[]>>(
      (acc, msg) => {
        acc[msg.date] = acc[msg.date] || [];
        acc[msg.date].push(msg);
        return acc;
      },
      {}
    );
  
    const handleSend = () => {
      const text = draft.trim();
      if (!text) return;
      const now = new Date();
      const hh = now.getHours() % 12 || 12;
      const mm = now.getMinutes().toString().padStart(2, "0");
      const ampm = now.getHours() < 12 ? "am" : "pm";
      const time = `${hh}:${mm} ${ampm}`;
      const today = "TODAY";
  
      setMessages((prev) => [
        ...prev,
        { date: today, type: "text", content: text, time, fromMe: true },
      ]);
      setDraft("");
    };
  
    const handleMoreClick = (e: MouseEvent<HTMLElement>) =>
      setMoreAnchor(e.currentTarget);
    const handleMoreClose = () => setMoreAnchor(null);
  
    const handleAttachClick = (e: MouseEvent<HTMLElement>) =>
      setAttachAnchor(e.currentTarget);
    const handleAttachClose = () => setAttachAnchor(null);
  
    const onDraftChange = (e: ChangeEvent<HTMLInputElement>) =>
      setDraft(e.target.value);
  
    return (
      <Box className="chat-screen">
        <Header />
  
        <Box className="chat-container">
          <SectionHeaderWithActions
            headingText="My Messages"
            hideBackIcon={false}
          />
  
          {/* partner header */}
          <Box className="chat-user-header">
            <Box className="user-circle">RV</Box>
            <Typography className="user-name">
              Raghav Vishnoi
            </Typography>
            <IconButton onClick={handleMoreClick} className="more-btn">
              <img src={moreIcon} alt="More" height={20} />
            </IconButton>
            <Menu
              anchorEl={moreAnchor}
              open={Boolean(moreAnchor)}
              onClose={handleMoreClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <MenuItem onClick={handleMoreClose}>Archive</MenuItem>
              <MenuItem onClick={handleMoreClose}>Search</MenuItem>
              <MenuItem onClick={handleMoreClose}>Export Chat</MenuItem>
              <MenuItem onClick={handleMoreClose}>Docs / Media</MenuItem>
            </Menu>
          </Box>
  
          {/* messages */}
          <Box className="chat-messages">
            {dateOrder.map((date) => (
              <Box key={date} className="chat-date-group">
                <Typography className="chat-date">{date}</Typography>
                {grouped[date].map((msg, i) => {
                  const side = msg.fromMe ? "out" : "in";
                  if (msg.type === "text") {
                    return (
                      <Box
                        key={i}
                        className={`chat-bubble chat-${side}`}
                      >
                        <Typography className="chat-text">
                          {msg.content}
                        </Typography>
                        <Typography className="chat-time">
                          {msg.time}
                        </Typography>
                      </Box>
                    );
                  }
                  if (msg.type === "pdf") {
                    return (
                      <Box
                        key={i}
                        className={`chat-bubble chat-pdf chat-${side}`}
                      >
                        <img
                          src={pdfIcon}
                          alt="PDF"
                          className="chat-pdf-icon"
                        />
                        <Typography className="chat-pdf-name">
                          {msg.name}
                        </Typography>
                        <Typography className="chat-time">
                          {msg.time}
                        </Typography>
                      </Box>
                    );
                  }
                  if (msg.type === "images") {
                    return (
                      <Box
                        key={i}
                        className={`chat-images chat-${side}`}
                      >
                        <img
                          src={msg.imageUrl}
                          alt="Chat image"
                          className="chat-img-thumb"
                        />
                        <Typography className="more-images">
                          +{msg.count} MORE
                        </Typography>
                      </Box>
                    );
                  }
                  return null;
                })}
              </Box>
            ))}
            <div ref={endRef} />
          </Box>
        </Box>
  
        {/* input + attachments */}
        <Box className="chat-input-bar">
          <IconButton
            onClick={handleAttachClick}
            className="attach-btn"
            size="small"
          >
            <img src={paperclipIcon} alt="Attach" />
          </IconButton>
          <Menu
            anchorEl={attachAnchor}
            open={Boolean(attachAnchor)}
            onClose={handleAttachClose}
          >
            <MenuItem onClick={handleAttachClose}>
              <ListItemIcon>📁</ListItemIcon>
              <ListItemText>From Device</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleAttachClose}>
              <ListItemIcon>☁️</ListItemIcon>
              <ListItemText>From Cloud</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleAttachClose}>
              <ListItemIcon>📄</ListItemIcon>
              <ListItemText>Document</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleAttachClose}>
              <ListItemIcon>🎥</ListItemIcon>
              <ListItemText>Video</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleAttachClose}>
              <ListItemIcon>🖼️</ListItemIcon>
              <ListItemText>Image</ListItemText>
            </MenuItem>
          </Menu>
  
          <input
            type="text"
            placeholder="Start Typing Here..."
            value={draft}
            onChange={onDraftChange}
            className="chat-input"
          />
          <IconButton
            onClick={handleSend}
            className="send-btn"
            size="small"
          >
            <img src={sendIcon} alt="Send" />
          </IconButton>
        </Box>
  
        <FooterMenuSet />
      </Box>
    );
  }
  