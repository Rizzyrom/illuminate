import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "settings",
        label: "Site Settings",
        path: "content/settings",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "site",
            label: "Site Configuration",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Site Title",
              },
              {
                type: "boolean",
                name: "maintenanceMode",
                label: "Maintenance Mode",
                description: "Enable maintenance mode to show maintenance page to visitors",
              },
              {
                type: "string",
                name: "maintenanceMessage",
                label: "Maintenance Message",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "datetime",
                name: "maintenanceReturnDate",
                label: "Expected Return Date",
              },
            ],
          },
        ],
      },
      {
        name: "hero",
        label: "Hero Section",
        path: "content/hero",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "badge",
            label: "Badge Text",
          },
          {
            type: "string",
            name: "title",
            label: "Main Title",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "stats",
            label: "Statistics",
            list: true,
            fields: [
              {
                type: "string",
                name: "number",
                label: "Stat Number",
              },
              {
                type: "string",
                name: "label",
                label: "Stat Label",
              },
            ],
          },
          {
            type: "object",
            name: "cta",
            label: "Call to Action",
            fields: [
              {
                type: "string",
                name: "primaryText",
                label: "Primary Button Text",
              },
              {
                type: "string",
                name: "primaryLink",
                label: "Primary Button Link",
              },
              {
                type: "string",
                name: "secondaryText",
                label: "Secondary Link Text",
              },
              {
                type: "string",
                name: "secondaryLink",
                label: "Secondary Link URL",
              },
            ],
          },
        ],
      },
      {
        name: "services",
        label: "Services",
        path: "content/services",
        format: "json",
        fields: [
          {
            type: "string",
            name: "badge",
            label: "Section Badge",
          },
          {
            type: "string",
            name: "title",
            label: "Section Title",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "subtitle",
            label: "Section Subtitle",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "serviceList",
            label: "Services",
            list: true,
            fields: [
              {
                type: "string",
                name: "name",
                label: "Service Name",
              },
              {
                type: "string",
                name: "subtitle",
                label: "Service Subtitle",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "features",
                label: "Features",
                list: true,
              },
            ],
          },
        ],
      },
      {
        name: "process",
        label: "How It Works",
        path: "content/process",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Section Title",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "subtitle",
            label: "Section Subtitle",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "steps",
            label: "Process Steps",
            list: true,
            fields: [
              {
                type: "string",
                name: "number",
                label: "Step Number",
              },
              {
                type: "string",
                name: "title",
                label: "Step Title",
              },
              {
                type: "string",
                name: "description",
                label: "Description",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
        ],
      },
      {
        name: "about",
        label: "About Section",
        path: "content/about",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Section Title",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "descriptions",
            label: "Description Paragraphs",
            list: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "image",
            label: "About Image",
          },
        ],
      },
      {
        name: "contact",
        label: "Contact Section",
        path: "content/contact",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Section Title",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "subtitle",
            label: "Section Subtitle",
            ui: {
              component: "textarea",
            },
          },
        ],
      },
      {
        name: "navigation",
        label: "Navigation",
        path: "content/navigation",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "logo",
            label: "Logo Text",
          },
          {
            type: "object",
            name: "menuItems",
            label: "Menu Items",
            list: true,
            fields: [
              {
                type: "string",
                name: "label",
                label: "Menu Label",
              },
              {
                type: "string",
                name: "href",
                label: "Link URL",
              },
            ],
          },
          {
            type: "object",
            name: "cta",
            label: "CTA Button",
            fields: [
              {
                type: "string",
                name: "text",
                label: "Button Text",
              },
              {
                type: "string",
                name: "href",
                label: "Button Link",
              },
            ],
          },
        ],
      },
    ],
  },
});
