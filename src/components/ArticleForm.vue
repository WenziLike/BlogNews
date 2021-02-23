<template>
    <div class="editor-page">
        <div class="container">
            <validation-errors v-if="errors" :validation-errors="errors"/>
            <form @submit.prevent="onSubmit">
                <fieldset>
                    <fielset class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Article Title"
                          v-model="title"
                        >
                    </fielset>
                    <fielset class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Description"
                          v-model="description"
                        >
                    </fielset>
                    <fielset class="form-group">
                        <textarea
                          type="text"
                          class="form-control"
                          placeholder="What is this article about?"
                          v-model="body"
                        ></textarea>
                    </fielset>
                    <fielset class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter Tags"
                          v-model="tagList"
                        >
                    </fielset>
                    <fielset class="form-group">
                        <button class="btn" :disabled="isSubmitting">Publish Article</button>
                    </fielset>
                </fieldset>

            </form>
        </div>
    </div>
</template>

<script>
import ValidationErrors from '@/components/ValidationErrors'

export default {
    name: 'articleForm',
    components: { ValidationErrors },
    props: {
        initialValue: {
            type: Object,
            required: true
        },
        errors: {
            type: Object,
            required: false
        },
        isSubmitting: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            title: '',
            description: '',
            body: '',
            tagList: ''
        }
    },
    methods: {
        onSubmit() {
            const form = {
                title: this.title,
                description: this.description,
                body: this.body,
                tagList: this.tagList.split(' ')
            }
            this.$emit('articleSubmit', form)
        }
    }
}
</script>
